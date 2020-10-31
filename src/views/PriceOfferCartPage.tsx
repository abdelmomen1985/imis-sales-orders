import { Button, Card, notification } from "antd";
import Axios from "axios";
import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import config from "../Configs";
import SoSqFooterButtons from "../components/SoSqFooterButtons";
import { AppContext } from "../context/AppContextProvider";
import { Post } from "../query/helpers";
import { PriceOfferType, SoSqDetailsResponseType } from "../types";

interface PriceOfferCartPageProps extends RouteComponentProps {}

export default function PriceOfferCartPage({
  history,
}: PriceOfferCartPageProps) {
  const { priceOffer, setPriceOffer } = useContext(AppContext);

  const openNotification = () => {
    notification.open({
      message: "تم تسجيل عرض الاسعار بنجاح ",
      description: "تم تسجيل عرض الاسعار بنجاح سيتم تحويلك الان ",
      onClick: () => {
        //console.log("Notification Clicked!");
      },
      duration: 2,
      onClose: () => {
        history.push("/price-offers");
        setPriceOffer({} as PriceOfferType);
      },
    });
  };

  const submitPriceOffer = async () => {
    // so_type: 01001-105C50CF-8CC5-4627-82B5-80DD3E660189
    // customer: 01001-D808105D-C2D1-450E-AB8F-446478FC7313
    // date: 2020-10-20
    // curreny: 01001-D0DA0215-C43C-40F7-B63C-D0F46447DA7C
    // rate: 1,
    // created by 1
    let [row] = await Post(
      config.API_URL + "imis/salesquotations",
      {
        CustomerID: priceOffer.customer.GUID,
      },
      {}
    );
    console.log("%c Mo2Log  row.GUID", "background: #bada55", row.GUID);
    const priceOfferId = row.GUID;

    let axiosArray = [];
    for (let index = 0; index < priceOffer.details.length; index++) {
      let req = Axios.post(config.API_URL + "imis/salesquotations/detail", {
        HeadID: priceOfferId,
        ItemID: priceOffer.details[index].product.GUID,
        Qnt: priceOffer.details[index].count,
        detailIndex: index,
      });
      axiosArray.push(req);
    }
    let res = await Axios.all(axiosArray);
    let respData = res.map((resp) => {
      const { detailIndex } = JSON.parse(resp?.config?.data);
      return {
        GUID: resp?.data[0]?.GUID,
        detailIndex,
      } as SoSqDetailsResponseType;
    });
    // Now send all Specs
    let specsReqArr: any[] = [];
    respData.forEach((item) => {
      let detailGUID = item.GUID;
      priceOffer.details[item.detailIndex].specElements.forEach(
        (singleSpec) => {
          let req = Axios.post(config.API_URL + "imis/salesquotations/spec", {
            HeadID: detailGUID,
            ElementId: singleSpec.GUID,
            Value: singleSpec.valueLabel
              ? singleSpec.valueLabel
              : singleSpec.value,
          });
          specsReqArr.push(req);
        }
      );
    });
    let specRes = await Axios.all(specsReqArr);
    console.log("%c Mo2Log specRes ", "background: #bada55", specRes);
    openNotification();

    /*
    let [detail_row] = await Post(
      config.API_URL + "imis/salesorders/detail",
      {
        HeadID,
        ItemID: salesOrder.details[0].product.GUID,
        Qnt: salesOrder.details[0].count,
      },
      {}
    );
    console.log("%c Mo2Log detail_row ", "background: #bada55", detail_row);
   */
  };
  const deletePriceOffer = () => {
    localStorage.removeItem("PRICE_OFFER");
    setPriceOffer({} as PriceOfferType);
    history.push("/");
  };
  const deleteDetialByIndex = (index: number) => {
    priceOffer.details.splice(index, 1);
    setPriceOffer(priceOffer);
  };

  console.log("%c Mo2Log priceOffer ", "background: #bada55", priceOffer);
  return (
    <>
      <Card>
        <h3>عرض اسعار لصالح {priceOffer.customer?.Name}</h3>
      </Card>
      {priceOffer?.details?.map((offerDetail, index) => (
        <Card key={index}>
          <h3>
            عدد: {offerDetail.count} - صنف{" "}
            {offerDetail.product?.ArabicDescription}
          </h3>
          {offerDetail.specElements?.map((element) => (
            <Card
              key={element.GUID}
              bodyStyle={{ padding: "16px" }}
              style={{
                backgroundColor: "#f5e6fdb3",
                marginBottom: "8px",
              }}
            >
              <h4>
                {element.ArabicDescription} :{" "}
                {element.valueLabel ? element.valueLabel : element.value}
                {element.UnitId ===
                  "01001-AD06DE17-6E8E-4B82-9F0F-401ED621A888" && (
                  <span> (سـم) </span>
                )}
              </h4>
            </Card>
          ))}
          <div style={{ textAlign: "left" }}>
            <Button
              danger
              type="primary"
              onClick={() => {
                deleteDetialByIndex(index);
              }}
            >
              مسح الصنف
            </Button>
          </div>
        </Card>
      ))}

      <SoSqFooterButtons
        onSubmit={submitPriceOffer}
        onDelete={deletePriceOffer}
        sosq="sq"
      />
    </>
  );
}

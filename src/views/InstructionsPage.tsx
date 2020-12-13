import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import InstructionsModal from "../components/instructions/InstructionsModal";

const projCategories = [
  { name: "فندق" },
  { name: "استراحة / شاليه" },
  { name: "فيلا" },
  { name: "شقق" },
  { name: "مكاتب" },
];

const itemsCategories = [
  { name: "غرف" },
  { name: "جناح" },
  { name: "استقبال" },
  { name: "اثاث مكتبي" },
  { name: "جلوس" },
];

const SecondStep = ({
  selectedCategoryKey,
  onSelectCategory,
}: {
  selectedCategoryKey: number;
  onSelectCategory: (key: number) => void;
}) => {
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <h1>
          <span className="h-step">2</span> اختر نوع المنتجات
        </h1>
        <hr />
        <div>
          {itemsCategories.map((item, key) => (
            <Button
              style={{
                padding: ".25em 1em 1.75em 1em",
                height: "2em",
                margin: ".5em",
                color: "white",
                backgroundColor: "#29B8B8",
                fontFamily: "Cairo",
                fontSize: "1.3em",
                fontWeight: "bold",
                borderRadius: ".25em",
                border: key === selectedCategoryKey ? ".1em solid #FFEB3B" : "",
              }}
              onClick={() => {
                onSelectCategory(key);
              }}
            >
              {key === selectedCategoryKey && (
                <CheckCircleOutlined style={{ margin: "0 .25em" }} />
              )}
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

const ThirdStep = ({
  selectedItemKey,
  onSelectItem,
}: {
  selectedItemKey: number;
  onSelectItem: (key: number) => void;
}) => {
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <h1>
          <span className="h-step">3</span> اختر المنتجات
        </h1>
        <hr />
        <div>
          {itemsCategories.map((item, key) => (
            <Button
              style={{
                padding: ".25em 1em 1.75em 1em",
                height: "2em",
                margin: ".5em",
                color: "white",
                backgroundColor: "#787575",
                fontFamily: "Cairo",
                fontSize: "1.3em",
                fontWeight: "bold",
                borderRadius: ".25em",
                border: key === selectedItemKey ? ".1em solid #FFEB3B" : "",
              }}
              onClick={() => {
                onSelectItem(key);
              }}
            >
              {key === selectedItemKey && (
                <CheckCircleOutlined style={{ margin: "0 .25em" }} />
              )}
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
export default function InstructionsPage() {
  const [selectedProjKey, setSelectedProjKey] = useState(-1);
  const [selectedCatKey, setSelectedCatKey] = useState(-1);
  const [selectedItemKey, setSelectedItemKey] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <h1>
        <span className="h-step">1</span> اختر طبيعة المشروع
      </h1>
      <hr />
      <div>
        {/** TODO get dynamicly */}
        {projCategories.map((item, key) => (
          <Button
            key={key}
            style={{
              padding: ".25em 1em 1.7em 1em",
              height: "1.75em",
              margin: ".5em",
              color: "white",
              backgroundColor: "#625EF7",
              fontFamily: "Cairo",
              fontSize: "1.3em",
              fontWeight: "bold",
              borderRadius: ".25em",
              border: key === selectedProjKey ? ".1em solid #FFEB3B" : "",
            }}
            onClick={() => {
              if (key !== selectedProjKey) setSelectedProjKey(key);
              else setSelectedProjKey(-1);
            }}
          >
            {key === selectedProjKey && (
              <CheckCircleOutlined style={{ margin: "0 .5em" }} />
            )}
            {item.name}
          </Button>
        ))}
      </div>

      <CSSTransition in={selectedProjKey > -1} timeout={900} classNames="logo">
        <>
          {selectedProjKey > -1 && (
            <SecondStep
              onSelectCategory={setSelectedCatKey}
              selectedCategoryKey={selectedCatKey}
            />
          )}
        </>
      </CSSTransition>
      <CSSTransition
        in={selectedCatKey > -1 && selectedProjKey > -1}
        timeout={900}
        classNames="logo"
      >
        <>
          {selectedCatKey > -1 && selectedProjKey > -1 && (
            <ThirdStep
              onSelectItem={(key) => {
                setSelectedItemKey(key);
                setModalOpen(true);
              }}
              selectedItemKey={selectedItemKey}
            />
          )}
        </>
      </CSSTransition>
      <InstructionsModal
        onSave={() => {}}
        visible={modalOpen}
        closeMe={() => setModalOpen(false)}
      />
    </>
  );
}

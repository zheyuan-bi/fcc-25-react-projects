import { useContext } from "react";
import Accordion from "../accordion";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { isLoading, enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  return (
    <>
      <h1>feature flags</h1>
      {isLoading ? (
        <h3>Loading data, please wait</h3>
      ) : (
        componentsToRender.map((item, i) => <div key={i}>{enabledFlags[item.key] ? item.component : null}</div>)
      )}
    </>
  );
}

import MenuList from "./menu-list";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-veiw-container">
      <MenuList list={menus} />
    </div>
  );
}

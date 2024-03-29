import { useCallback, useEffect, useRef } from "react";
import {
  Avatar,
  DatePicker,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Input,
  Link,
  LinkDesign,
  Panel,
  ShellBar,
  ShellBarItem,
  Tab,
  TabContainer,
} from "@ui5/webcomponents-react";
import { Button } from "@ui5/webcomponents-react";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "./App.css";

setTheme("sap_horizon");

function App() {
  const themeChangeItem = useRef(),
    addButton = useRef(),
    urlInput = useRef(),
    urlDeadline = useRef(),
    editDialog = useRef(),
    cancelBtn = useRef(),
    saveBtn = useRef(),
    titleEditInput = useRef(),
    dateEditInput = useRef(),
    themeSelect = useRef(),
    shellBar = useRef(),
    profileSettingsSelect = useRef(),
    dialogButton = useRef(),
    dialogHelpCloseButton = useRef(),
    rtlSwitch = useRef(),
    contentDensitySwitch = useRef();

  const handleProfileClick = useCallback((event) => {
    window["profile-pop"].showAt(event.detail.targetRef);
  }, []);

  useEffect(() => {
    shellBar.current.addEventListener("profile-click", handleProfileClick);
    return () => {
      shellBar.current.removeEventListener("profile-click", handleProfileClick);
    };
  }, [handleProfileClick]);

  return (
    <>
      <div className="app">
        <div>
          <ShellBar
            primary-title="Wishlist"
            show-notifications
            notifications-count="2"
            ref={shellBar}
          >
            <ShellBarItem
              icon="palette"
              text="Theme"
              ref={themeChangeItem}
            ></ShellBarItem>
            <Avatar slot="profile" size="XS" initials="JD"></Avatar>
          </ShellBar>
        </div>

        <TabContainer fixed collapsed>
          <Tab text="My Wishlist"></Tab>
        </TabContainer>

        <section className="app-content">
          <div className="create-todo-wrapper">
            <Input
              placeholder="Type a URL..."
              ref={urlInput}
              className="add-todo-element-width"
              id="add-input"
            ></Input>
            <DatePicker
              format-pattern="dd/MM/yyyy"
              className="add-todo-element-width"
              ref={urlDeadline}
              id="date-picker"
            ></DatePicker>
            <Button
              className="add-todo-element-width"
              ref={addButton}
              design="Emphasized"
              id="add-button"
            >
              Add Todo
            </Button>
          </div>

          <div className="list-todos-wrapper">
            <Panel
              header-text="Unrealized Wishes"
              className="list-todos-panel"
            ></Panel>

            <Panel
              header-text="Realized Wishes"
              className="list-todos-panel"
              id="completed-tasks"
            ></Panel>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

import * as React from "react";
import { useReactToPrint } from "react-to-print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LinearIndeterminate from "../Progress/LinearIndeterminate";
import { useSchoolsContext } from "../../src/store";

export const PdfPrint = ({
  classes,
  onSearchPage,
}: {
  classes: any;
  onSearchPage: boolean;
}) => {
  //const componentRef = React.useRef(null);

  const { componentRef } = useSchoolsContext();
  const tempRef = React.useRef(null);
  const onBeforeGetContentResolve = React.useRef<(() => void) | null>(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
    setLoading(true);
    setText("Loading new text...");

    return new Promise<void>((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef ? componentRef.current : tempRef.current;
  }, [componentRef, tempRef]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
  });

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve, text]);

  return (
    <div>
      <ListItem disabled={onSearchPage} className={classes.listItem} button>
        <ListItemIcon onClick={handlePrint} className={classes.listIcon}>
          <PictureAsPdfIcon />
        </ListItemIcon>
        <ListItemText onClick={handlePrint} primary="Print/Download" />
      </ListItem>
      {/* <div style={{display: "none"}} >
        <div ref={componentRef}>
          <PageContent  />
        </div>
      </div> */}
      {loading && <LinearIndeterminate />}
    </div>
  );
};

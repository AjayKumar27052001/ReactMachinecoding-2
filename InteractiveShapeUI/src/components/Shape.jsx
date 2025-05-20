import { useMemo, useState, useEffect } from "react";
import classnames from "classnames";

const Shape = ({ data }) => {
  const boxes = useMemo(() => data.flat(1), [data]);
  const [selected, setSelected] = useState(new Set());
  const [loading, setLoading] = useState(false);

  //doubt:--countOfVisibleBoxes need to run everytime when user selects any box.so here we put inside usememo hook and dependency is Boxes (array)..will it works?
  const countOfVisibleBoxes = useMemo(() => {
    return boxes.reduce((acc, box) => {
      if (box === 1) acc += 1;

      return acc;
    }, 0);
  }, [boxes]);

  const unload = () => {
    setLoading(true);
    //remove boxes every 500ms
    //["5" ,"3","2"...]
    const keys = Array.from(selected.keys());
    const removenextKey = () => {
      if (keys.length) {
        const currentKey = keys.shift();
        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });
        setTimeout(removenextKey, 500);
      } else {
        setLoading(false);
      }
    };
    setTimeout(removenextKey, 100);
  };

  useEffect(() => {
    if (selected.size >= countOfVisibleBoxes) {
      unload();
    }
  }, [selected]);

  const eventHandler = (e) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");

    if (index === null || status == "hidden" || loading) return;
    setSelected((prev) => new Set(prev.add(index)));
  };

  return (
    <div className="box-container " onClick={eventHandler}>
      {boxes.map((item, index) => {
        //note:--i shouldnt use () here because i had variable declaration not involved in return statement
        const status = item === 1 ? "visible" : "hidden";
        const selectedStatus = selected.has(index.toString())
          ? "selected"
          : "notSelected";
        return (
          <div
            key={`${item}-${index}`}
            className={classnames("box", status, selectedStatus)}
            data-index={index}
            data-status={status}
          >
            HI
          </div>
        );
      })}
    </div>
  );
};
export default Shape;

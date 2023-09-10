import { Item, useListState } from "react-stately";
import {
  mergeProps,
  useFocusRing,
  useListBox,
  useListBoxSection,
  useOption,
} from "react-aria";
import { useRef } from "react";

export function ListBox(props) {
  // Create state based on the incoming props
  let state = useListState(props);

  // Get props for the listbox element
  let ref = useRef(null);
  let { listBoxProps, labelProps } = useListBox(props, state, ref);

  return (
    <>
      <div {...labelProps}>{props.label}</div>
      <ul
        {...listBoxProps}
        ref={ref}
        style={{
          // padding: 0,
          // margin: "5px 0",
          listStyle: "none",
          // border: "1px solid gray",
          // maxWidth: 250,
          // maxHeight: 300,
          // overflow: "auto",
        }}
      >
        {[...state.collection].map((item) =>
          item.type === "section" ? (
            <ListBoxSection key={item.key} section={item} state={state} />
          ) : (
            <Option key={item.key} item={item} state={state} />
          )
        )}
      </ul>
    </>
  );
}

function ListBoxSection({ section, state }) {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  // If the section is not the first, add a separator element to provide visual separation.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li
          role="presentation"
          style={{
            // borderTop: "1px solid gray",
            // margin: "2px 5px",
          }}
        />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <span
            {...headingProps}
            style={{
              // fontWeight: "bold",
              // fontSize: "1.1em",
              // padding: "2px 5px",
            }}
          >
            {section.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          style={{
            // padding: 0,
            listStyle: "none",
          }}
        >
          {[...section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

function Option({ item, state }) {
  // Get props for the option element
  let ref = useRef(null);
  let { optionProps, isSelected, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        background: isSelected ? "blueviolet" : "transparent",
        color: isDisabled ? "#aaa" : isSelected ? "white" : null,
        // padding: "2px 5px",
        outline: isFocusVisible ? "2px solid orange" : "none",
      }}
    >
      {item.rendered}
    </li>
  );
}

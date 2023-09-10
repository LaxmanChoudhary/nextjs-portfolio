import {ListDropTargetDelegate, ListKeyboardDelegate, useDropIndicator, useDroppableCollection} from 'react-aria';

import {useDroppableCollectionState} from 'react-stately';

export function ReorderableListBox(props) {
  let state = useListState(props);
  let ref = React.useRef(null);

  // Setup react-stately and react-aria hooks for dropping.
  let dropState = useDroppableCollectionState({
    ...props,
    collection: state.collection,
    selectionManager: state.selectionManager
  });

  let { collectionProps } = useDroppableCollection(
    {
      ...props,
      // Provide drop targets for keyboard and pointer-based drag and drop.
      keyboardDelegate: new ListKeyboardDelegate(
        state.collection,
        state.disabledKeys,
        ref
      ),
      dropTargetDelegate: new ListDropTargetDelegate(state.collection, ref)
    },
    dropState,
    ref
  );

  return (
    <ul
      {...mergeProps(listBoxProps, collectionProps)}
      ref={ref}
    >
      {[...state.collection].map((item) => (
        <ReorderableOption
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

function ReorderableOption({ item, state, dragState, dropState }) {
  // ...

  return (
    <>
      <DropIndicator
        target={{ type: 'item', key: item.key, dropPosition: 'before' }}
        dropState={dropState}
      />
      <li
        {...mergeProps(optionProps, dragProps, focusProps)}
        ref={ref}
        className={`option ${isFocusVisible ? 'focus-visible' : ''}`}
      >
        {item.rendered}
      </li>
      {state.collection.getKeyAfter(item.key) == null &&
        (
          <DropIndicator
            target={{ type: 'item', key: item.key, dropPosition: 'after' }}
            dropState={dropState}
          />
        )}
    </>
  );
}

function DropIndicator(props) {
  let ref = React.useRef(null);
  let { dropIndicatorProps, isHidden, isDropTarget } = useDropIndicator(
    props,
    props.dropState,
    ref
  );
  if (isHidden) {
    return null;
  }

  return (
    <li
      {...dropIndicatorProps}
      role="option"
      ref={ref}
      className={`drop-indicator ${isDropTarget ? 'drop-target' : ''}`}
    />
  );
}
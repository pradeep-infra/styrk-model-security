import {
  Box,
  Button,
  Checkbox,
  Divider,
  Link as MuiLink,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import disabledTrashIcon from "../assets/images/trash-disabled-icon.svg";
import enabledTrashIcon from "../assets/images/trash-enabled-icon.svg";
import backIcon from "../assets/images/custom-left-arrow.svg";
import dragHandleIcon from "../assets/images/dragHandle.svg";
import Select from "react-select";
import { useState } from "react";

const modelList = [
  {
    name: "Spectrum Analyzer",
    value: "Spectrum Analyzer",
    label: "Spectrum Analyzer",
    order: 1,
  },
  {
    name: "Neural Network",
    value: "Neural Network",
    label: "Neural Network",
    order: 2,
  },
  {
    name: "Quantum Processor",
    value: "Quantum Processor",
    label: "Quantum Processor",
    order: 3,
  },
  {
    name: "Cognitive Engine",
    value: "Cognitive Engine",
    label: "Cognitive Engine",
    order: 4,
  },
  { name: "Synapse", value: "Synapse", label: "Synapse", order: 5 },
  {
    name: "Logic Processor",
    value: "Logic Processor",
    label: "Logic Processor",
    order: 6,
  },
  {
    name: "Deep Learning",
    value: "Deep Learning",
    label: "Deep Learning",
    order: 7,
  },
  { name: "Cosmo", value: "Cosmo", label: "Cosmo", order: 8 },
  { name: "Orion", value: "Orion", label: "Orion", order: 9 },
  { name: "Nova", value: "Nova", label: "Nova", order: 10 },
];
const EditComplianceWatchList = () => {
  const [disabled] = useState<boolean>(false);
  const [viewWatchList, setViewWatchList] = useState<boolean>(true);
  const [addWatchList, setAddWatchList] = useState<boolean>(false);
  const [reorderWatchList, setReorderWatchList] = useState<boolean>(false);
  // const handleAddWatchlistClick: () => {
  //   setViewWatchList(true)
  // }
  const handleAddWatchlistClick = () => {
    setViewWatchList(false);
    setReorderWatchList(false);
    setAddWatchList(true);
  };
  const handleReorderWatchlistClick = () => {
    setViewWatchList(false);
    setAddWatchList(false);
    setReorderWatchList(true);
  };
  const handleBackClick = () => {
    setViewWatchList(true);
    setAddWatchList(false);
    setReorderWatchList(false);
  };

  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };

  const [list, setList] = useState(modelList);
  const [dragAndDrop, setDragAndDrop] = useState<any>(initialDnDState);

  // onDragStart fires when an element
  // starts being dragged
  const onDragStart = (event: any) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", "");
  };

  // onDragOver fires when an element being dragged
  // enters a droppable area.
  // In this case, any of the items on the list
  const onDragOver = (event: any) => {
    // in order for the onDrop
    // event to fire, we have
    // to cancel out this one
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the droppable area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item: any, index: any) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = (event: any) => {
    setList(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return (
    <>
      {viewWatchList ? (
        <>
          <Box>
            <Stack direction="row" gap={1} mb={2}>
              <Button
                variant="outlined"
                startIcon={<AddOutlinedIcon />}
                onClick={() => handleAddWatchlistClick()}
              >
                Add to watchlist
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleReorderWatchlistClick()}
                startIcon={<CachedOutlinedIcon />}
              >
                Reorder
              </Button>
            </Stack>
            <Typography variant="caption">Select Model</Typography>
            <Select options={modelList} isMulti />
            <Stack
              justifyContent="flex-end"
              alignItems="center"
              direction="row"
              mt={1}
            >
              <Typography variant="body1" className="disabledText">
                Delete
              </Typography>
              <IconButton>
                <img
                  src={disabled ? enabledTrashIcon : disabledTrashIcon}
                  width="24"
                  alt=""
                />
              </IconButton>
            </Stack>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    direction="row"
                    width="100%"
                  >
                    <Typography variant="body1">Model</Typography>
                    <Stack
                      justifyContent="flex-end"
                      alignItems="center"
                      direction="row"
                      width="100%"
                    >
                      <Typography variant="body1">select All</Typography>
                      <Checkbox edge="end" />
                    </Stack>
                  </Stack>
                </ListItemButton>
              </ListItem>
              <Divider component="li" />
              {modelList.map((listName, index) => {
                const labelId = `checkbox-list-secondary-label-${listName.order}`;
                return (
                  <>
                    <ListItem
                      key={index}
                      secondaryAction={<Checkbox edge="end" />}
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText id={labelId} primary={listName.value} />
                      </ListItemButton>
                    </ListItem>
                    <Divider component="li" />
                  </>
                );
              })}
            </List>
          </Box>
        </>
      ) : !viewWatchList && !reorderWatchList ? (
        <Box>
          <Stack
            className="addWatchlist"
            gap={1}
            direction="row"
            alignItems="center"
            bgcolor="#fff"
          >
            <MuiLink
              underline="none"
              className="d-flex"
              onClick={() => handleBackClick()}
            >
              <img src={backIcon} alt="" style={{ display: "block" }} />
            </MuiLink>
            <Typography textTransform="uppercase" variant="subtitle1">
              Add to Watchlist
            </Typography>
          </Stack>

          <Typography variant="caption">Select Model</Typography>
          <Select options={modelList} isMulti />
        </Box>
      ) : !viewWatchList && !addWatchList ? (
        <Box>
          <Stack
            className="addWatchlist"
            gap={1}
            direction="row"
            alignItems="center"
            bgcolor="#fff"
          >
            <MuiLink
              underline="none"
              className="d-flex"
              onClick={() => handleBackClick()}
            >
              <img src={backIcon} alt="" style={{ display: "block" }} />
            </MuiLink>
            <Typography textTransform="uppercase" variant="subtitle1">
              Reorder Watchlist
            </Typography>
          </Stack>
          <Stack direction="row" mt={2} mb={2}>
              <Button
                variant="outlined"
              >
                Confirm changes
              </Button>              
            </Stack>
          <List className="reorderWatchlist">
            {list.map((listName: any, index: number) => {
              return (
                <>
                  <ListItem
                    data-position={index}
                    key={index}
                    disablePadding
                    draggable={true}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    onDragLeave={onDragLeave}
                    className={
                      dragAndDrop && dragAndDrop.draggedTo === Number(index)
                        ? "dropArea"
                        : ""
                    }
                  >
                    <ListItemButton>
                      <Stack
                        justifyContent="space-between"
                        alignItems="center"
                        direction="row"
                        width="100%"
                      >
                        <Typography variant="body1">
                          {listName?.name}
                        </Typography>
                        <img src={dragHandleIcon} alt="" />
                      </Stack>
                    </ListItemButton>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};
export default EditComplianceWatchList;

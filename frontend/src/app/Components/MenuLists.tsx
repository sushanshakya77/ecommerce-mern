import {
  AttachMoney,
  ExpandLess,
  ExpandMore,
  Female,
  Headphones,
  Male,
  Menu,
} from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Zoom,
} from "@mui/material";
import { ReactNode, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProducts {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any;
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((response) => response.json());

interface ICategoryItem {
  label: string;
  icon: ReactNode;
  width?: number;
  onClick(): void;
}
function MenuLists() {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const categoryItems = useMemo<ICategoryItem[]>(
    () => [
      {
        label: "Electronics",
        icon: <Headphones />,
        onClick: () => navigate("/products/categories/electronics"),
      },
      {
        label: "Jewelery",
        icon: <AttachMoney />,
        onClick: () => navigate("/products/categories/jewelery"),
      },
      {
        label: "Men's Clothing",
        icon: <Male />,
        width: 120,
        onClick: () => navigate("/products/categories/men's clothing"),
      },
      {
        label: "Women's Clothing",
        icon: <Female />,
        width: 160,
        onClick: () => navigate("/products/categories/women's clothing"),
      },
    ],
    [navigate]
  );

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemButton
        onClick={handleClick}
        sx={{
          backgroundColor: "#7fad39",
          color: "white",
          borderRadius: "2px",
          marginTop: "5px",
          "&:hover": {
            backgroundColor: "#688d31",
          },
        }}
      >
        <ListItemIcon sx={{ color: "white" }}>
          <Menu />
        </ListItemIcon>
        <ListItemText primary="All Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List
          component="div"
          disablePadding
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "10px",
            minWidth: "400%",
          }}
        >
          {categoryItems.map((item, index) => (
            <Zoom
              in={open}
              key={`${item.label}-index`}
              style={{
                transitionDelay: open ? `${50 + index * 200}ms` : "0ms",
              }}
            >
              <ListItemButton onClick={item.onClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ minWidth: `${item.width ?? 0}px` }}
                />
              </ListItemButton>
            </Zoom>
          ))}
        </List>
      </Collapse>
    </div>
  );
}

export default MenuLists;

import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material';

export type SiteDataType = {
  name: string;
  route: string;
  element: JSX.Element;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
};

export type TodoListItemType = {
  text: string;
  completed: boolean;
};

export type TodoListType = TodoListItemType[];

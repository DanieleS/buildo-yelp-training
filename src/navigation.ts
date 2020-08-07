import { getCurrentView, getDoUpdateCurrentView, HistoryLocation } from "avenger/lib/browser";
 
export type CurrentView = 
  | { view: 'itemView', itemAlias: String }
  | { view: 'home' };
 
const itemViewRegex = /^\/(.+)$/;
 
export function locationToView(location: HistoryLocation): CurrentView {
  const itemViewMatch = location.pathname.match(itemViewRegex);
 
  if (itemViewMatch) {
    return { view: 'itemView', itemAlias: itemViewMatch[1] };
  } else {
    return { view: 'home' };
  }
}
 
export function viewToLocation(view: CurrentView): HistoryLocation {
  switch (view.view) {
    case 'itemView':
      return { pathname: `/${view.itemAlias}`, search: {} };
    case 'home':
      return { pathname: '/home', search: {} };
  }
}
 
export const currentView = getCurrentView(locationToView);
export const doUpdateCurrentView = getDoUpdateCurrentView(viewToLocation);
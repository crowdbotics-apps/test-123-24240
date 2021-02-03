import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList200061Navigator from '../features/ArticleList200061/navigator';
import Maps200048Navigator from '../features/Maps200048/navigator';
import BlankScreen0200043Navigator from '../features/BlankScreen0200043/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList200061: { screen: ArticleList200061Navigator },
Maps200048: { screen: Maps200048Navigator },
BlankScreen0200043: { screen: BlankScreen0200043Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

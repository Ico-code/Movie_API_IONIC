import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetailPage from "./pages/RecipeDetail";
import useRecipeService from "./hooks/useRecipeService";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Welcome from "./pages/welcome";

setupIonicReact();

const App: React.FC = () => {
  const { recipes, addRecipe } = useRecipeService();

  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem routerLink="/home">
                  <IonLabel>Home</IonLabel>
                </IonItem>
                <IonMenuToggle>
                  <IonItem routerLink="/add-recipe">
                    <IonLabel>Add Recipe</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Switch>
          <Route exact path="/" component={Welcome} />
            <Route
              exact
              path="/home"
              render={() => <Home recipes={recipes} />}
            />
            <Route
              path="/add-recipe"
              render={() => <AddRecipe addRecipe={addRecipe} />}
            />
            <Route
              path="/recipe-detail/:id"
              render={() => <RecipeDetailPage recipes={recipes} />}
            />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

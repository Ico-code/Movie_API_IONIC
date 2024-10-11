import React from "react";
import {
  IonPage,
  IonButton,
  IonHeader,
  IonMenuButton,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSpinner,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonList,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Recipe } from "../hooks/useRecipeService";
import { bookOutline } from "ionicons/icons";

const Home: React.FC<{ recipes: Recipe[] }> = ({ recipes }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {recipes.map((recipe) => (
            <IonItem
              key={recipe.id}
              routerLink={`/recipe-detail/${recipe.id}`}
              detail
            >
              <IonIcon icon={bookOutline} slot="start" />
              <IonLabel>
                <h2>{recipe.title}</h2>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonButton
        expand="full"
        routerLink="/add-recipe"
      >
        Add Recipe
      </IonButton>
    </IonPage>
  );
};

export default Home;

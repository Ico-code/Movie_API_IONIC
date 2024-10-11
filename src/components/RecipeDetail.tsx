import React from "react";
import { useParams } from "react-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { Recipe } from "../hooks/useRecipeService";

const RecipeDetail: React.FC<{ recipes: Recipe[] }> = ({ recipes }) => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"/>
          </IonButtons>
          <IonTitle>{recipe?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader className="py-0">
            <IonCardTitle>Ingredients</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              {recipe?.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <hr style={{ border: '1px solid #ccc', margin: '16px 0', height:'0px' }}/>
            <h2>Instructions</h2>
            <p>{recipe?.instructions}</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RecipeDetail;

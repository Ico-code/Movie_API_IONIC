import {
  IonPage,
  IonHeader,
  IonMenuButton,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";
import RecipeForm from "../components/RecipeForm";
import { Recipe } from "../hooks/useRecipeService";

const AddRecipe: React.FC<{ addRecipe: (recipe: Recipe) => void }> = ({
  addRecipe,
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Add Recipe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <RecipeForm addRecipe={addRecipe} />
      </IonContent>
    </IonPage>
  );
};

export default AddRecipe;

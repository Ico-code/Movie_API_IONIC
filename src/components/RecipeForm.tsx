import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonTextarea,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { Recipe } from "../hooks/useRecipeService";

const RecipeForm: React.FC<{ addRecipe: (recipe: Recipe) => void }> = ({
  addRecipe,
}) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecipe: Recipe = {
      id: Math.random().toString(),
      title,
      ingredients: ingredients.split(","),
      instructions,
    };
    addRecipe(newRecipe);
    history.push("/home");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Add Recipe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Title</IonLabel>
            <IonInput
            placeholder="Enter recipe title"
            value={title}
            onIonChange={(e) => setTitle(e.detail.value!)}
          />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Ingredients (comma-separated)
            </IonLabel>
            <IonTextarea
            placeholder="e.g. Tomatoes, Cheese, Basil"
            value={ingredients}
            onIonChange={(e) => setIngredients(e.detail.value!)}
          />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Instructions</IonLabel>
            <IonTextarea
            placeholder="Describe the steps for the recipe"
            value={instructions}
            onIonChange={(e) => setInstructions(e.detail.value!)}
          />
          </IonItem>
          <IonButton
            expand="full"
            type="submit"
            disabled={
              !title ||
              !ingredients ||
              !instructions
            }
            className="ion-margin-top"
          >
            Add Recipe to list
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RecipeForm;

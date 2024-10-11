import { IonPage, IonHeader, IonMenuButton, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import RecipeDetail from '../components/RecipeDetail'
import { Recipe } from '../hooks/useRecipeService';

const RecipeDetailPage: React.FC<{ recipes: Recipe[] }> = ({ recipes }) => {
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Recipe Details</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <RecipeDetail recipes={recipes} />
        </IonContent>
      </IonPage>
    );
  };
  
  export default RecipeDetailPage;
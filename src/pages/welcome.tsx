import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const Welcome: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to Recipe Keeper!</h2>
        <p>Your personal assistant for storing and managing your favorite recipes.</p>
        <IonButton expand="full" routerLink='/home'>Get Started</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;

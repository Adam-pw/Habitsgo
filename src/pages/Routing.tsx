import {
  Redirect,
  Route,
  useHistory,
  RouteComponentProps,
} from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  home,
  people,
  personAdd,
  personCircle,
  pieChart,
} from "ionicons/icons";
import "./Routing.scss";
import Home from "./Home";
import Friends from "./Friends";
import Groups from "./Groups";
import GrpProgress from "./GrpProgress";

interface SingleGroupPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Routing: React.FC = () => {
  const history = useHistory();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/friends">
              <Friends />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/groups">
              <Groups/>
            </Route>
            <Route exact path="/groupprog">
              <GrpProgress/>
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="activity" href="/activity">
              <IonIcon icon={pieChart} />
              <IonLabel>Activity</IonLabel>
            </IonTabButton>
            <IonTabButton tab="friends" href="/friends">
              <IonIcon icon={personAdd} />
              <IonLabel>Friends</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Groups" href="/Groups">
              <IonIcon icon={people} />
              <IonLabel>Grooups</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircle} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Routing;

import { withRouter } from "./withRouter";
import { TransitionGroup } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default AnimatedSwitch;

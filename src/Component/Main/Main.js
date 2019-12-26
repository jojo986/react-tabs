import React, {Component} from 'react';
import Header from './Header';
import PageContent from './PageContent';

class Main extends Component {
  render() {
    return(
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main className="App-header">
          <PageContent />
        </main>
        <footer>
        </footer>
      </React.Fragment>
    )
  }
}

export default Main;
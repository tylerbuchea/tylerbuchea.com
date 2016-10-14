import React, {
  Component,
} from 'react';
import 'bulma/css/bulma.css';
import './index.css';
import './skeleton.css';
import cards from './cards.json';
import Card from './Card';
import Header from './Header';
import Modal from './Modal';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards,
      modal: null,
    };
  }

  closeModal = () => this.setState({ modal: null })
  openModal = (card) => this.setState({ modal: card })

  renderCards = (cards) =>
    <section className="section">
      <h2 className="title is-2 has-text-centered">Portfolio</h2>
      <div className="container">
        <div className="columns is-multiline">
          {cards.map((card, index) =>
            <div
              className="column is-one-third-tablet is-one-quarter-desktop"
              key={index}
            >
              <Card
                {...card}
                openModal={() => this.openModal(card)}
              />
            </div>
          )}
        </div>
      </div>
    </section>

  render() {
    const cards = this.renderCards(this.state.cards);
    return (
      <div>
        <Modal
          close={this.closeModal}
          modal={this.state.modal}
        />
        <Header />
        {cards}
      </div>
    );
  }

}

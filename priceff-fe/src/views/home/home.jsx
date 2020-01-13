import React, {PureComponent} from 'react';
import classnames from 'classnames';

import style from './home.module.scss';

class HomePage extends PureComponent {

  state = {
    nameInput: ''
  }

  handleInputChange = (value) => {
    this.setState({nameInput: value});
  }

  render() {

    const {
      generatePopulation,
      currentPopulation,
      populationsIdsList,
      getPopulation
    } = this.props;

    const {
      nameInput
    } = this.state;

    return (
      <div className={classnames(style.homePage)}>
        <div className={style.container}>
          <div className={style.left}>
              <div className={style.list}>
                {currentPopulation &&
                  populationsIdsList.map(el => {
                    return (
                      <div
                        className={classnames(style.element, {[style.active]: el.id === currentPopulation.id})}
                        onClick={() => getPopulation(el.id)}
                      >
                        {el.name}
                      </div>
                    )
                  })
                }
              </div>
            <div className={style.form}>
              <div className={style.label}>Insert population name</div>
              <input className={style.input} type='text' onChange={(e) => this.handleInputChange(e.target.value)} />
              <button className={style.button} onClick={() => generatePopulation(nameInput)}>GENERATE</button>
            </div>
          </div>
          <div className={style.right}>
            {currentPopulation &&
              <>
              <div className={style.line}>
                <span className={style.title}>POPULATION NAME: </span>
                <span className={style.info}>
                {`${currentPopulation.name}`}
                </span>
              </div>
              <div className={style.line}>
                <span className={style.title}>AVERAGE AGE: </span>
                <span className={style.info}>
                {`${currentPopulation.population.averageAge}`}
                </span>
              </div>
              <div className={style.line}>
                <span className={style.title}>YOUNGEST AGE: </span>
                <span className={style.info}>
                {`${currentPopulation.population.youngestAge.age} --- 
                 ${currentPopulation.population.youngestAge.name.title}
                 ${currentPopulation.population.youngestAge.name.last}
                 ${currentPopulation.population.youngestAge.name.first}`}
                </span>
              </div>
              <div className={style.line}>
                <span className={style.title}>OLDEST AGE: </span>
                <span className={style.info}>
                  {`${currentPopulation.population.oldestAge.age} --- 
                  ${currentPopulation.population.oldestAge.name.title}
                  ${currentPopulation.population.oldestAge.name.last}
                  ${currentPopulation.population.oldestAge.name.first}`}
                </span>
              </div>
              <div className={style.line}>
                <span className={style.title}>NORTHERN LOCATION: </span>
                <span className={style.info}>
                  {`${currentPopulation.population.northernPerson.locationName} --- 
                  ${currentPopulation.population.northernPerson.name.title}
                  ${currentPopulation.population.northernPerson.name.last}
                  ${currentPopulation.population.northernPerson.name.first}`}
                </span>
              </div>
              <div className={style.line}>
                <span className={style.title}>SOUTHERN LOCATION: </span>
                <span className={style.info}>
                  {`${currentPopulation.population.southernPerson.locationName} --- 
                  ${currentPopulation.population.southernPerson.name.title}
                  ${currentPopulation.population.southernPerson.name.last}
                  ${currentPopulation.population.southernPerson.name.first}`}
                </span>
              </div>
              </>
            }
          </div>
        </div>
      </div>
    );
  }
}

export { HomePage };
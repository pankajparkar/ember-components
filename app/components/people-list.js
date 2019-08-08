import Component from '@glimmer/component';

export default class PeopleList extends Component{
    showPerson(person) {
        alert(person);
    }
};

var React = require('react');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }

        // this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        //console.log('up here', this);
        this.setState(() => {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {
        var languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
        var t = languages.map(cur => {
            return (
                <li 
                    style={cur === this.state.selectedLanguage?{color:'violet'}:null}
                    key={cur}
                    onClick={() => this.updateLanguage(cur)}
                    >{cur}</li>
            );
        });
        console.log(this.state.selectedLanguage);
        return (
                   <ul className="languages">{t}</ul>
        )
    }
}

module.exports = Popular;
var React = require('react');
var propTypes = require('prop-types');
var api = require('../utils/api')


function SelectLanguage (props) {
    var languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
    var popNav = languages.map(cur => {
        return (
            <li 
                style={cur === props.selectedLanguage?{color:'violet'}:null}
                key={cur}
                onClick={() => props.onSelect(cur)}
                >{cur}</li>
        );
    });
    console.log(props.selectedLanguage);
    return (
        <ul className="languages">{popNav}</ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: propTypes.string.isRequired,
    onSelect: propTypes.func.isRequired
}

function RepoGrid(props) {
    return (
        <ul className="popular-list">
            {props.repos.map((repo , i) => {
                return (
                    <li key={repo.name} className="popular-item">
                        <div className="popular-rank"># {i + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt={'Avatar for ' + repo.owner.login}
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: propTypes.array.isRequired
}


class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }

        //  next line is for es5: bind context of handler to Popular class. not necessdary with arrow functions
        // this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount () {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(lang) {
        //console.log('up here', this);
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
        .then((repos) => {
            this.setState(() => {
                return {
                    repos : repos
                }
            })
        })
    }

    render() {

        return (
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={(lang) => this.updateLanguage(lang)}
                />
                {!this.state.repos?<p>Loading...</p> :<RepoGrid repos={this.state.repos}/>}
                {/* {JSON.stringify(this.state.repos,2,null)} */}
            </div>
        )
    }
}

module.exports = Popular;


var AllJobs = React.createClass({
  getInitialState() {
    return { jobs: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/jobs.json', (response) => { this.setState({ jobs: response}) });
  },

  render() {
    var jobs = this.state.jobs.map((job) => {
      return (
        <div>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <h4>{job.email}</h4>
          <h4>{job.company}</h4>
          <h4>{job.location}</h4>
        </div>
      )
    });

    return(
      <div>
        {jobs}
      </div>
    )
  }
})

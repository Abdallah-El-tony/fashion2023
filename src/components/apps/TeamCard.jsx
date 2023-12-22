/* eslint-disable react/prop-types */

const TeamCard = ({person,name,job}) => {
  return (
    <div>
        <div className="member p-3 border">
            <div>
                <img src={person} alt="" />
            </div>
            <div className="mt-2">
                <h4 className="mb-1">{name}</h4>
                <p>{job}</p>
            </div>
        </div>
    </div>
  )
}

export default TeamCard
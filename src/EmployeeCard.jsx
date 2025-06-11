//子要素Page
const EmployeeCard = ({ icon,name,post,email }) => {
  return (
    <div class="name-card">
      <div className="employee-card">
        <img src={icon} alt={name} />
          <div className="profile">
            <p className="employee-name">{name}</p>
            <p>{post}</p>
            <p>{email}</p>
          </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

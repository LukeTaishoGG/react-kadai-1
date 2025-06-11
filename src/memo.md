  return (
    <div>
      <h1>海賊プロフィール</h1>
      {crew.map((member, index) => (
        <div key={index}>
          <img src={member.icon} alt={member.name} width={80} />
          <h3>{member.name}</h3>
          <p>{member.post}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  )

    return (
    <div>
      <h1>海賊プロフィール</h1>
      {crew.map((member, index) => (
        <EmployeeCard
          key={index}
          name={member.name}
          post={member.post}
          email={member.email}
          icon={member.icon}
        />
      ))}
    </div>
  );
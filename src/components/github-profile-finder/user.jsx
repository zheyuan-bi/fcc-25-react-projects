export default function User({ user }) {
  const { avatar_url, followers, following, public_repos, html_url, name, login, created_at } = user;
  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div>
        <a href={html_url}>{`${login}(${name})`}</a>
        <p>User joined on {createdDate.getFullYear()}</p>
      </div>
      <div>
        <div>
          <p>public repos</p>
          <p>{public_repos}</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

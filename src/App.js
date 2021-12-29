//=====task 1======//
import user from "./data-json/user.json";
import User from "./components/Profile/Profile";
//=====task 2======//
import statsData from "./data-json/data.json";
import Statistics from "./components/Statistics/statisticsList";
//=====task 3=====//
import friendsData from "./data-json/friends.json";
import FriendList from "./components/Friends/friendsList";
//======task 4=====//
import transactionsData from "./data-json/transactions.json";
import TransactionHistory from "./components/Transactions/transactionsHistory";
import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </Container>
  );
}

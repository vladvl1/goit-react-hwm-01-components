import { UserProfileCard } from "./UserProfileCard/UserProfileCard";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendsList/FriendsList";
import { TransactionsHistory } from "./Transactions/TransactionsHistory";
import userData from "./UserProfileCard/user.json";
import datas from "./Statistics/data.json";
import friends from "./FriendsList/friends.json";
import items from "./Transactions/transactions.json"



export const App = () => {
  return (
    <>
      <UserProfileCard
        {...userData}
      />
      <Statistics datas={datas} title="Upload stats"  />
      <FriendsList friends={friends} />
      <TransactionsHistory items={items} />
    </>
  );
};

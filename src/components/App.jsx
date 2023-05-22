import { Profile } from './Profile/Profile';
import user from 'user';
import { Statistic } from './Statistic/Statistic';
import data from 'data';
import { FriendList } from './FriendList/FriendList';
import friends from 'friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'transactions';
import { appStyles } from './styles';

export const App = () => {
  return (
    <div style={appStyles}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

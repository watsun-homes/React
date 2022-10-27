import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PageOne } from './PageOne';
import { PageTwo } from './PageTwo';
import { PageThree } from './PageThree';

export const TabSample = () => {
  return(
    <Tabs>
    <TabList>
      <Tab>HOME</Tab>
      <Tab>About</Tab>
      <Tab>Contact</Tab>
    </TabList>

    <TabPanel>
      <PageOne />
    </TabPanel>
    <TabPanel>
      <PageTwo />
    </TabPanel>
     <TabPanel>
      <PageThree />
    </TabPanel>
  </Tabs>
  );
}

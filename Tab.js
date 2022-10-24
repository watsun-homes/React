import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const TabSample = () => {
  return(
    <Tabs>
    <TabList>
      <Tab>HOME</Tab>
      <Tab>About</Tab>
      <Tab>Contact</Tab>
    </TabList>

    <TabPanel>
      <h1>HOMEです</h1>
    </TabPanel>
    <TabPanel>
      <h1>Aboutです</h1>
    </TabPanel>
     <TabPanel>
      <h1>Contactです</h1>
    </TabPanel>
  </Tabs>
  );
}

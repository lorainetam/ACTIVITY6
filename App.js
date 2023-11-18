import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const accountsData = [
  { ID: 1, username: 'treasure', password: '@liveLover', usertype: 'student' },
  { ID: 2, username: 'blackpink', password: '@biggestGG', usertype: 'teacher' },
  { ID: 3, username: 'bangtanseyeondan', password: 'Biggest@BG', usertype: 'teacher' },
  { ID: 4, username: 'ikon', password: '#hiphopLover', usertype: 'student' },
  { ID: 5, username: 'ohmygirl', password: 'fairy07000000006', usertype: 'student' },
  { ID: 6, username: 'iz*one', password: '@synchronized12', usertype: 'student' },
  { ID: 7, username: 'tomorrowxtogether', password: '@handsom7855', usertype: 'student' },
  { ID: 8, username: 'babymonster', password: '5thGGbaby55', usertype: 'student' },
  { ID: 9, username: 'akmu', password: 'Nsiblings22', usertype: 'teacher' },
  { ID: 10, username: 'littlemix', password: '777lovelots999', usertype: 'teacher' },
  { ID: 11, username: 'onewe', password: 'bandcutie', usertype: 'student' },
  { ID: 12, username: 'mamamoo', password: '11allVOCLAS', usertype: 'teacher' },
  { ID: 13, username: 'onedirection', password: 'fun@songs', usertype: 'teacher' },
];


const usersData = [
  { ID: 1, firstname: 'Haruto', lastname: 'Watanabe', course: 'BSIT', year: '1', section: 'D' },
  { ID: 2, firstname: 'Jennie', lastname: 'Kim', course: 'BSME', year: '2', section: 'A' },
  { ID: 3, firstname: 'Namjoon', lastname: 'Kim', course: 'BSME', year: '3', section: 'A' },
  { ID: 4, firstname: 'Jinhwan', lastname: 'Park', course: 'BSCpE', year: '2', section: 'B' },
  { ID: 5, firstname: 'Chaeyeon', lastname: 'Lee', course: 'BSIT', year: '2', section: 'B' },
  { ID: 6, firstname: 'Heuning', lastname: 'Kai', course: 'BSCS', year: '1', section: 'C' },
  { ID: 7, firstname: 'Haram', lastname: 'Lee', course: 'BSCRIM', year: '2', section: 'B' },
  { ID: 8, firstname: 'Jisoo', lastname: 'Kim', course: 'BSAD', year: '4', section: 'A' },
  { ID: 9, firstname: 'Hyunsuk', lastname: 'Choi', course: 'BSME', year: '2', section: 'c' },
  { ID: 10, firstname: 'Sakura', lastname: 'Miyawaki', course: 'BSIT', year: '3', section: 'D' },
  { ID: 11, firstname: 'Jungkook', lastname: 'Jeon', course: 'BSIT', year: '3', section: 'C' },
  { ID: 12, firstname: 'Moonbin', lastname: 'Park', course: 'BSCS', year: '2', section: 'A' },
  { ID: 13, firstname: 'Chaewon', lastname: 'Kim', course: 'BSAD', year: '1', section: 'D' },
];

const studentsData = accountsData
  .filter((account) => account.usertype === 'student')
  .map((student) => ({
    ID: student.ID,
    name: usersData.find((user) => user.ID === student.ID)?.firstname || '',
    course: usersData.find((user) => user.ID === student.ID)?.course || '',
  }));

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'chartreuse' },
    tableContainer: { marginTop: 10, marginBottom: 20 },
    head: { height: 40, backgroundColor: 'magenta' }, 
    text: { margin: 6, textAlign: 'center', fontFamily: 'Poppins-Black', color: '#333' }, 
  });
  
  const App = () => {
    const renderTable = (data, headers) => (
      <Table borderStyle={{ borderWidth: 10, borderColor: 'pink' }}>
        <Row data={headers} style={styles.head} textStyle={styles.text} />
        {data.map((rowData, index) => (
          <Row key={index} data={Object.values(rowData)} textStyle={styles.text} />
        ))}
      </Table>
    );
  
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>Accounts Table</Text>
        <ScrollView style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 10, borderColor: 'cyan' }}/>
          {renderTable(accountsData, ['ID', 'Username', 'Password', 'User Type'])}
        </ScrollView>
  
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'Black' }}>Users Table</Text>
        <ScrollView style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 10, borderColor: 'cyan' }}/>
          {renderTable(usersData, ['ID', 'First Name', 'Last Name', 'Course', 'Year', 'Section'])}
        </ScrollView>
  
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'Black' }}>Students Table</Text>
        <ScrollView style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 10, borderColor: 'cyan' }}>
            <Row data={['ID', 'Name', 'Course']} style={styles.head} textStyle={styles.text} />
            <FlatList
              data={studentsData}
              keyExtractor={(item) => item.ID.toString()}
              renderItem={({ item }) => (
                <Row data={[item.ID, item.name, item.course]} textStyle={styles.text} />
              )}
            />
          </Table>
        </ScrollView>
      </View>
    );
  };
  

export default App;
  
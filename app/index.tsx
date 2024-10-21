import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const visa = require('../assets/images/visa.png');
const MasterCard=require('../assets/images/mastercard.jpg');


const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backButton}>{'<'}</Text>
        <Text style={styles.title}>Checkout</Text>
      </View>
      
      <Text style={styles.billAmountTitle}>Total bill amount</Text>
      <Text style={styles.billAmount}>$820.00</Text>
      
      <View style={styles.savedCardsHeader}>
        <Text style={styles.savedCardsTitle}>Saved Cards</Text>
        <TouchableOpacity>
          <Text style={styles.addNew}>Add New</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal contentContainerStyle={styles.cardsContainer}>
        <View style={styles.card}>
          <Image 
            source={MasterCard} 
            style={styles.cardImage} 
          />
          <Text style={styles.cardDetails}>MasterCard</Text>
          <Text style={styles.cardDetails}>Exp Date: 10/20</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={visa} 
            style={styles.cardImage} 
          />
          <Text style={styles.cardDetails}>Visa</Text>
          <Text style={styles.cardDetails}>Exp Date: 12/22</Text>
        </View>
        {/* Add more cards as needed */}
      </ScrollView>
      
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    marginTop:'10%',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  billAmountTitle: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 8,
  },
  billAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  savedCardsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  savedCardsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addNew: {
    fontSize: 16,
    color: '#007AFF',
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  card: {
    width: width * 0.6,
    height: width * 0.35,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 8,
  },
  cardDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  payButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;

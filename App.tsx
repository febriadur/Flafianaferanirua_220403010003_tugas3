import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selamat datang di Aplikasi penjualan Bunga Mawar</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://tse2.mm.bing.net/th?id=OIP.vS77ilxpWVksJdYKHfmNfgHaE8&pid=Api&P=0&h=180'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://www.recipetineats.com/wp-content/uploads/2016/03/Nasi-Goreng_3-1.jpg?resize=85'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://spicebreeze.com/wp-content/uploads/2018/03/Nasi-Goreng-form-sq.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://christieathome.com/wp-content/uploads/2021/01/Nasi-Goreng-4-b-scaled.jpg'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="Beli Sekarang" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;
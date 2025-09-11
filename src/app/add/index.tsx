import { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Categories } from '@/components/categories'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { LinkStorage } from '@/storage/link-storage'

export default function Add() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert('Categoiria', 'Selecione uma categoria')
      }

      if (!name.trim()) {
        return Alert.alert('Nome', 'Informe um nome para o link')
      }

      if (!url.trim()) {
        return Alert.alert('Url', 'Informe a url')
      }

      await LinkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      })
    } catch (error) {
      Alert.alert('Erro', 'Não foi possivel salvar o link')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name='arrow-back' size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories selected={category} onChange={setCategory} />

      <View style={styles.form}>
        <Input placeholder='Nome' onChangeText={setName} autoCorrect={false} />
        <Input
          placeholder='URL'
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <Button title='Adicionar' onPress={handleAdd} />
      </View>
    </View>
  )
}

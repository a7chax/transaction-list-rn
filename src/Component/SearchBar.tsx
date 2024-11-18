import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../core/constant/color';
import { IconSearch } from '../assets/Icon/IconSearch';
import { IconChevronDown } from '../assets/Icon/IconChevronDown';

interface SearchBarProps {
  keyword: string;
  setkeyword: (keyword: string) => void;
  selectedFilter: string;
  onPressFilter: () => void;
}

const SearchBar : React.FC<SearchBarProps> = ({keyword,setkeyword, onPressFilter, selectedFilter}) => {
  return (
    <View style={styles.containerSearchbar}>
        <IconSearch/>
        <TextInput style={styles.containerTextInput} value={keyword} onChangeText={setkeyword} placeholder="Cari nama, bank, atau nominal" />
        <TouchableOpacity style={styles.containerTextFilter} onPress={onPressFilter}>
          <Text style={styles.textFilter}>{selectedFilter}</Text>
          <IconChevronDown stroke={COLOR.PRIMARY}/>
        </TouchableOpacity>
    </View>
  );
};

const memoizedSearchBar = React.memo(SearchBar);
export { memoizedSearchBar as SearchBar };

const styles = StyleSheet.create({
  containerTextInput : {
    height : 56,
    width : 'auto',
    flex : 1,
    paddingHorizontal : 16,
    flexDirection : 'row',
    justifyContent : 'space-between',
    overflow : 'hidden',
  },
  textFilter : {
    fontSize : 16,
    fontWeight : '600',
    color : COLOR.PRIMARY,
  },
  containerSearchbar : {
    flexDirection : 'row',
    alignItems : 'center',
    width : 'auto',
    paddingLeft : 16,
    backgroundColor : '#FFFF',
    borderRadius : 8,
  },
  containerTextFilter : {
    marginHorizontal : 16,
    flexDirection : 'row',
  },
});

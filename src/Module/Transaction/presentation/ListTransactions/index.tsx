import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useListTransaction } from './useListTransaction';
import { ModalFilterTransaction } from '@ModuleTransaction/Component/ModalFilterTransaction';
import { CardTransaction } from '@ModuleTransaction/Component/CardTransaction';
import { SearchBar } from '@component/SearchBar';
import { ITransaction } from '@ModuleTransaction/domain/entity/ITransaction';

const ItemSeparator = () => <View style={styles.separator} />;

export const ListTransactionsScreen = () => {
    const {
        queryListTransaction,
        goToDetail,
        onChangeKeyword,
        onPressFilter,
        showModalFilter,
        filter,
        showingModalFilter,
        onSelectFilter,
        keyword,
    } = useListTransaction();


    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={styles.containerSearchBar}>
                <SearchBar keyword={keyword} setkeyword={onChangeKeyword} onPressFilter={showingModalFilter} selectedFilter={filter.sortBy.label}/>
            </View>
            <ModalFilterTransaction
                isVisible={showModalFilter}
                selectFilter={onSelectFilter}
                selectedFilter={filter.sortBy}
                onDismiss={() => onPressFilter(false)}
            />
            <FlatList
                data={queryListTransaction.data?.data}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                renderItem={({item} : {item : ITransaction}) => (
                    <CardTransaction
                       {...item}
                        onPress={() => goToDetail(item)}
                    />
                )}
                ItemSeparatorComponent={ItemSeparator}
                ListEmptyComponent={<Text>{queryListTransaction.data?.message}</Text>}
                contentContainerStyle={styles.containerListTransactions}
                numColumns={1}
                maxToRenderPerBatch={20}
                updateCellsBatchingPeriod={100}
                initialNumToRender={20}
                windowSize={10}
            />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    separator : {
        height : 16,
    },
    containerListTransactions : {
        padding : 16,
    },
    containerSearchBar :{
        paddingHorizontal : 16,
        paddingTop : 16,
        paddingBottom : 8,
    },
});

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParams } from "../home/Home";
import { DetailParams } from '../assets/views/components/redux/Detail';

export type RootStackParamList = {
    Home: HomeParams;
    Detail: DetailParams;
    Product: undefined;
    Exit: undefined;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
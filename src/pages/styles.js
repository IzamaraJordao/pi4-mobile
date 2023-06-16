import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    justify-content: center;
    align-items: center;
`;
export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const ContainerGrafic = styled.View`
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* background: #eee; */
    border-radius: 14px;
    margin: 0 20px 30px;
    padding: 5px;
    border: 1px solid #FF8C00;
`;
export const Input = styled.TextInput`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`;
export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #FF8C00;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;
export const DivContainer = styled.View`
    /* align-items: center; */
    /* margin: 0 20px 30px; */
`;

export const Avatar = styled.Image`
    width: 150px;
    height: 150px;
    /* border-radius: 32px; */
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin: 4px;
    /* text-align: center; */
`;
export const NameDetal = styled.Text`
    font-size: 25px;
    color: #FF8C00;
    font-weight: bold;
    margin: 4px;
`;
export const Curiosity = styled.Text`
    font-size: 30px;
    color: #FF8C00;
    font-weight: bold;
    margin: 4px;
`;
export const TitleStatstic = styled.Text`
    font-size: 20px;
    color: #FF8C00;
    font-weight: bold;
    margin: 4px;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    margin-left: 5px;

`;

export const ProfileButton = styled(RectButton)`
    margin: 18px 5px 5px;
    padding: 10px;
    align-self: stretch;
    border-radius: 4px;
    background: #FF8C00;
    justify-content: center;
    align-items: center;
    height: 35px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;

export const Header = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;
export const ContainerDetal = styled.View`
display: flex;
flex-direction: column;
border: 1px solid #FF8C00;
border-radius: 10px;
padding: 15px;
margin: 10px;
`;

export const Avatarperfil = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 80;
  background: #eee;
`;

export const Nameperfil = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bioperfil = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #334;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #667;
  margin-top: 2px;
`;
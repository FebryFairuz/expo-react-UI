import { TouchableOpacity } from "react-native"
import mystyles from "../utils/static_style"

const BtnTouchableOpacity = ({children, onpress}) => {
    return (
        <TouchableOpacity style={mystyles.btn} onPress={onpress}>
            {children}
      </TouchableOpacity>
    )
}

export {BtnTouchableOpacity};
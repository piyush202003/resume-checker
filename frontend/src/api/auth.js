import { loadMockUser, mockUser, saveMockUser } from "../mock/auth"
import { mockDelay } from "../mock/_helpers"

export const authApi = {
    register : async ({name, email}) => {
        await mockDelay()
        const u = { ...mockUser, name: name || mockUser.name, email: email || mockUser.email }
        saveMockUser(u)
        return { user: u, message: 'New account has been created.'}
    },

    login: async ({email})=>{
        await mockDelay()
        const u = { ...mockUser, email: email || mockUser.email }
        saveMockUser(u)
        return { user: u, message: 'Login in your account.'}
    },

    logout: async() => {
        await mockDelay(150)
        saveMockUser(null)
        return { ok: true, message: 'Logged Out your account.' }
    },

    me: async () => {
        await mockDelay(150)
        const u = loadMockUser()
        if(!u){
            throw{
                status: 401,
                message: 'Not authenticated'
            }
        }
        return { user: u }
    },

    updateProfile: async(payload)=>{
        await mockDelay()
        const current = loadMockUser() || mockUser
        const u = { ...current, ...payload}
        saveMockUser(u)
        return { user: u, message: 'Profile updated'}
    },

    changePasword: async()=>{
        await mockDelay()
        return { ok: true, message: 'Password changed' }
    }
}
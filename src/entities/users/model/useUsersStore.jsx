import { create } from 'zustand';

export const useUsersStore = create((set, get) => ({
    users: [],
    isLoading: false,
    error: null,
    getUsers: async () => {
        set({ isLoading: true, error: null });
        try {
            const res = await fetch(`http://localhost:3000/users`);

            if (res.ok) {
                const data = await res.json();
                set({ users: data });
            }
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ isLoading: false });
        }
    },
    addUser: async (newUser) => {
        set({ isLoading: true, error: null });
        try {
            const res = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (res.ok) {
                const newUserRes = await res.json();

                set((state) => ({ users: [...state.users, newUserRes] }));
            }
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ isLoading: false });
        }
    },
    deleteUser: async (userId) => {
        set({ isLoading: true, error: null });
        try {
            const res = await fetch(`http://localhost:3000/users/${userId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                const deletedUser = await res.json();

                set((state) => ({
                    users: state.users.filter(
                        (user) => user.id !== deletedUser.id,
                    ),
                }));
            }
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ isLoading: false });
        }
    },
    deleteUsers: async (userIds) => {
        set({ isLoading: true, error: null });
        try {
            await Promise.all(
                userIds.map((userId) => get().deleteUser(userId)),
            );
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ isLoading: false });
        }
    },
}));

const SESSION_STORAGE_PREFIX = '__session_storage_fox_chats';
type SessionStorageKeys = 'theme' | 'mode';

export const getSessionStorage = <TOutput>(key: SessionStorageKeys): TOutput | undefined => {
	try {
		const savedValue = sessionStorage.getItem(`${SESSION_STORAGE_PREFIX}${key}`);

		return savedValue ? JSON.parse(savedValue) : undefined;
	} catch (err) {
		return undefined;
	}
};

export const saveSessionStorage = <TInput>(key: SessionStorageKeys, value: TInput): void => {
	try {
		sessionStorage.setItem(`${SESSION_STORAGE_PREFIX}${key}`, JSON.stringify(value));
	} catch (err) {}
};

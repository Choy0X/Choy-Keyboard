async function showInput(InputData = []) {
    SetNuiFocus(true, true);

    const Data = await new Promise((resolve) => {
        RegisterNuiCallbackType('submitData');
        on('__cfx_nui:submitData', (data) => {
            resolve(data);
            closeInput();
        });

        RegisterNuiCallbackType('close')
        on('__cfx_nui:close', () => {
            resolve(false);
            closeInput();
        });

        SendNuiMessage(JSON.stringify({
            action: 'ShowInput',
            inputData: InputData,
        }));
    });

    return Data;
}

function closeInput() {
    SetNuiFocus(false, false);
    SendNuiMessage(JSON.stringify({
        action: 'CloseInput',
    }));
}

exports('showInput', showInput);
exports('closeInput', closeInput);
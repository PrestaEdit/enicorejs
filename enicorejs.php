<?php

class EniCoreJS extends Module
{
    public function __construct()
    {
        $this->name = 'enicorejs';

        parent::__construct();
    }

    public function install()
    {
        parent::install() && $this->registerHook(['displayHeader', 'displayFooter']);

        return true;
    }

    public function hookDisplayHeader()
    {
        $this->context->controller->registerJavascript('enicorejs', 'modules/enicorejs/views/js/demo.js', ['position' => 'bottom', 'priority' => 999]);
    }

    public function hookDisplayFooter($params)
    {
        return $this->context->smarty->fetch('module:enicorejs/views/templates/demo.tpl');
    }
}
